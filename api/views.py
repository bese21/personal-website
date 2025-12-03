from django.contrib.auth import authenticate
from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import LoginSerializer

# Simple in-memory FAQ "database"
FAQ_ENTRIES = {
    "what are your main skills?": (
        "My strongest skills are Python, Django, Django REST Framework, PostgreSQL, "
        "JavaScript, Git, and deploying apps on Render/Railway/Docker."
    ),
    "what is your strongest programming language?": (
        "Python — I use it every day for backend, scripting, and automation."
    ),
    "do you know javascript/react?": (
        "Yes, I’ve built several projects with React, Next.js, and vanilla JavaScript."
    ),
    "tell me about your experience at abyssinia bank.": (
        "I worked there for 2 years as a Backend Developer. I built secure banking APIs, "
        "optimized transaction systems, and handled sensitive financial data."
    ),
    "what projects have you worked on?": (
        "This portfolio API, an e-commerce platform, a task management app (like Trello), "
        "a real-time chat app, and a banking transaction dashboard."
    ),
    "what is your biggest project so far?": (
        "A full banking transaction monitoring dashboard that processed thousands of "
        "transactions per minute securely."
    ),
    "how can i contact you?": (
        "Email: your.email@gmail.com | LinkedIn: linkedin.com/in/yourname | "
        "GitHub: github.com/yourname"
    ),
    "are you available for freelance work?": (
        "Yes! I’m open to interesting freelance or full-time opportunities."
    ),
    "what is your education background?": (
        "BSc in Computer Science from [Your University], graduated in [Year]."
    ),
    "do you have any certifications?": (
        "Yes — AWS Certified Developer (Associate), Django Developer Certification, "
        "and several Coursera/Pluralsight certificates."
    ),
    "what databases do you work with?": (
        "PostgreSQL (main), MySQL, SQLite, and a bit of MongoDB."
    ),
    "do you know docker or kubernetes?": (
        "Yes, I containerize all my apps with Docker and have deployed them on "
        "Render, Railway, and AWS."
    ),
    "can you work with teams?": (
        "Absolutely — I’ve worked in teams of 3–15 people using Agile/Scrum and "
        "daily stand-ups."
    ),
    "what tools do you use daily?": (
        "VS Code, Git/GitHub, Postman, Docker, Linux terminal, and Notion for notes."
    ),
    "do you speak english fluently?": (
        "Yes, full professional proficiency (writing, speaking, and technical discussions)."
    ),
    "where are you located?": (
        "Addis Ababa, Ethiopia — but I work remotely with no problem."
    ),
    "what is your availability?": (
        "Full-time remote or hybrid in Addis Ababa."
    ),
    "do you have any hobbies?": (
        "I love hiking, reading tech blogs, contributing to open-source, "
        "and playing football on weekends."
    ),
    "why did you choose backend development?": (
        "I love solving complex problems, working with data, and building systems "
        "that scale and stay secure."
    ),
    "what is your favorite project you’ve built?": (
        "This interactive portfolio — because it combines clean backend, nice docs "
        "(Swagger), and a fun AI/static FAQ feature."
    ),
    "do you know any frontend frameworks?": (
        "Yes — React, Next.js, Vue (basic), and Tailwind CSS for styling."
    ),
    "have you worked with payment gateways?": (
        "Yes — Chapa, PayPal, Stripe, and Telebirr integrations."
    ),
    "can you design databases?": (
        "Yes, I design normalized schemas, write migrations, and optimize queries."
    ),
    "do you write tests?": (
        "Yes — unit tests and integration tests with pytest and Django’s test framework."
    ),
    "what is your github profile?": (
        "github.com/yourusername — all my projects are public."
    ),
    "do you prefer remote or office work?": (
        "I’m fully comfortable with remote and have 3+ years of remote experience."
    ),
    "how fast can you deliver a project?": (
        "Depends on scope — a simple API like this one takes me 1–2 days from scratch."
    ),
    "are you currently employed?": (
        "[Yes, I work at … / No, I’m actively looking for new opportunities]"
    ),
    "do you know devops?": (
        "Yes — CI/CD with GitHub Actions, Docker, Nginx, Gunicorn, and basic AWS."
    ),
    "what’s the best way to get in touch quickly?": (
        "Send me an email or LinkedIn message — I reply within a few hours."
    ),
}


@extend_schema(
    description="Test endpoint – returns a welcome message",
    responses={200: dict}
)
@api_view(['GET'])
def hello(request):
    return Response({
        "message": "Welcome to My Personal Portfolio API!",
        "name": "Your Name Here",
        "status": "API is working perfectly!"
    })


@extend_schema(
    description="Authenticate a user using username and password.",
    request=LoginSerializer,
    responses={
        200: dict,
        400: {"detail": "Missing or invalid payload"},
        401: {"detail": "Invalid credentials"},
    }
)
@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    user = authenticate(
        request=request,
        username=serializer.validated_data['username'],
        password=serializer.validated_data['password'],
    )

    if not user:
        return Response(
            {"detail": "Invalid username or password."},
            status=status.HTTP_401_UNAUTHORIZED
        )

    # Generate JWT refresh & access tokens for this user
    refresh = RefreshToken.for_user(user)

    return Response(
        {
            "message": "Login successful.",
            "user": {
                "username": user.username,
                "email": user.email,
            },
            "tokens": {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            },
        }
    )


@extend_schema(
    description="Simple FAQ endpoint. Pass a question via the 'q' query parameter to get a predefined answer.",
    parameters=[
        {
            "name": "q",
            "required": True,
            "in": "query",
            "description": "The exact FAQ question text.",
            "schema": {"type": "string"},
        }
    ],
    responses={200: dict}
)
@api_view(['GET'])
def faq(request):
    """
    Very simple FAQ endpoint.

    Example:
    /api/faq/?q=what are your main skills?
    """
    question = request.query_params.get('q')

    if not question:
        return Response(
            {"answer": "Please provide a question using the 'q' query parameter."},
            status=status.HTTP_400_BAD_REQUEST
        )

    # We do a case-insensitive lookup on the predefined questions
    normalized = question.strip().lower()
    for stored_question, stored_answer in FAQ_ENTRIES.items():
        if stored_question.lower() == normalized:
            return Response({"question": question, "answer": stored_answer})

    return Response(
        {
            "question": question,
            "answer": "I don't know that one yet, but I'll learn it soon!"
        }
    )
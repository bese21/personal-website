from django.urls import path

from .views import hello, login, faq

urlpatterns = [
    path('hello/', hello, name='hello'),
    path('auth/login/', login, name='login'),
    path('faq/', faq, name='faq'),
]
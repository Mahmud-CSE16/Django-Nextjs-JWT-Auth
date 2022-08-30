from django.urls import path, include
from .views import LoginView, LogoutView, RegiserView, UserView
urlpatterns = [
    path('api/register/',RegiserView.as_view()),
    path('api/login/',LoginView.as_view()),
    path('api/user/',UserView.as_view()),
    path('api/logout/',LogoutView.as_view()),
]

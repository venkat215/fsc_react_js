from django.urls import path
# from .views import RegisterView, LoginView
from rest_framework_simplejwt import views as jwt_views
from .views import RegisterView, HelloWorldView, LogoutAndBlacklistRefreshTokenForUserView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(),
         name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(),
         name='blacklist'),
]


# urlpatterns = [
#     path('register', RegisterView.as_view(), name='register'),
#     path('login', LoginView.as_view()),
# ]

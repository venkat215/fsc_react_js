from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import ExternalUserMessagesSerializer
from rest_framework.response import Response
from rest_framework import status


from rest_framework import permissions

# Create your views here.


class ReceiveMessageView(GenericAPIView):

    permission_classes = (permissions.AllowAny,)

    serializer_class = ExternalUserMessagesSerializer

    def post(self, request):

        print(request.data)

        serializer = ExternalUserMessagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

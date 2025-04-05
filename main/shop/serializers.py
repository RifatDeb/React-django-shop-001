from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token




User = get_user_model()        
class Useserializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','password','first_name','last_name','email','id']
        extra_kwargs = {"password":{"write_only":True,'required':True}}

    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        profile.objects.create(prouser = user)
        return user
    
class profileSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        fields = "__all__"
        read_only_fields = ['prouser']
  


    def validate(self,attrs):
        attrs['prouser'] = self.context['request'].user
        return attrs

    def to_representation(self,instance):
        response = super().to_representation(instance)
        response['prouser'] = Useserializers(instance.prouser).data
        return response


class productserializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = "__all__"
        depth = 1
        
        def imageurl(self, obj):
            request = self.context.get('request')
            return request.url()          

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model = category
        fields = "__all__"


class CartSerializers(serializers.ModelSerializer):
    class Meta:
        model = cart
        fields = "__all__"
  

class CartproductSerializers(serializers.ModelSerializer):
    class Meta:
        model = cartProduct
        fields = "__all__"
        depth = 1

class OrderSerializers(serializers.ModelSerializer):
    class Meta:
        model = order
        fields = "__all__" 
        depth = 1       
            
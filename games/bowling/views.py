from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def home(request):
    return HttpResponse("Hello, world. Lets go bowling!")

def about(request):
    return render(request, 'bowling/about.html', {'title': 'About'})

@login_required
def startGame(request):
    return render()

@login_required
def playGame(request):
    return render()

@login_required
def endGame(request):
    return render()

@login_required
def showPlayerStats(request):
    return render()

@login_required
def showAppStats(request):
    top_scores = Game.objects.order_by('game_total_score')[:10]
    output = ', '.join([u.user_name for u in User])
    context = {'top_scores': top_scores}
    return render(request, 'appstats.html', context)

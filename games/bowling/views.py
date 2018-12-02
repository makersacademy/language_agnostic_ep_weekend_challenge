from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from bowling.models import Player,Game,Frame
from django.contrib.auth.models import User
from django.shortcuts import render, redirect, get_object_or_404
from .forms import PlayGameForm

def home(request):
    return render(request, 'bowling/home.html', {'title': 'Home'})

def about(request):
    return render(request, 'bowling/about.html', {'title': 'About'})

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('bowling:login')
    else:
        form = UserRegisterForm()
    return render(request, 'bowling/registration/register.html', {'form': form})

@login_required
def startGame(request):
    user = get_object_or_404(User,username=request.user)
    newGame = Game(user_id=user)
    newGame.save()
    form = PlayGameForm()
    context = {}
    context['game_id'] = newGame.id
    context['sequence_no'] = 1
    context['roll_no'] = 1
    context['form'] = form
    return render(request, 'playgame.html', context)

@login_required
def playGame(request,game_id):
    if request.method == 'POST':
        context = {}
        roll_score = request.POST['roll_score']
        print(request.POST)
        if request.POST['roll_no'] == '1':
            print(game_id)
            newFrame = Frame(game_id_id = game_id)
            newFrame.roll1_score = roll_score
            newFrame.sequence_no = int(request.POST['sequence_no'])
            newFrame.save()
            context['roll_no'] = 2
            context['sequence_no'] = int(request.POST['sequence_no'])
        else:
            newFrame = get_object_or_404(Frame,id=request.POST['frame_id'])
            newFrame.roll2_score = roll_score
            newFrame.save()
            context['roll_no'] = 1
            context['sequence_no'] = int(request.POST['sequence_no']) +1
        if context['sequence_no'] >2:
            return redirect('bowling:end_game', game_id)
        else:
            context['frame_id'] = newFrame.id
            form = PlayGameForm()
            context['form'] = form
            context['game_id'] = game_id
        return render(request, 'playgame.html', context)

@login_required
def endGame(request):
    return render()

@login_required
def showPlayerStats(request):
    user = get_object_or_404(User,username=request.user)
    #parent_member = get_object_or_404(Member,user_id=user.id)
    top_scores = Game.objects.filter(user_id = user).order_by('-game_total_score')
    context = {'top_scores': top_scores}
    return render(request, 'playerstats.html', context)

@login_required
def showAppStats(request):
    top_scores = Player.objects.order_by('-best_score')[:10]
    context = {'top_scores': top_scores}
    return render(request, 'appstats.html', context)

# Weekend Challenge

Bowling challenge
DJANGO / Python / SQLlite

10 frames
2 rolls each
10 pins

Strike = all 10 in first roll / bonus = total of pins knocked in next 2 rolls
Spare = all 10 finally down in second / bonus = total of pins knocked in next roll

Database

1. Game (id, playername, date, total score, Frames_played, Strike_count, Spare_count)
2. Frame (Game id, Frame id, roll1_score, rolls2_score, is_strike, is_spare)


Screens
  Game Screen
  1. Start Game
  2. Provide score
  3. Your performance
  4. Hall of fame

  User Screen
  1. Register
  2. Login
  3. Logout

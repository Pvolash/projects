import random
while True:
    compCho = random.choice(["rock","paper","scissor"])
    userCho = input("Rock-Paper-Scissor?: ")
    if compCho == userCho:
        print("DRAW!")
    elif (userCho =="rock" and compCho == "paper") or (userCho == "paper" and compCho == "scissor") or (userCho == "scissor" and compCho == "rock"):
        print("YOU lost!")
    else:
        print("YOU won!")


#First Join Commands That Will Only Run Once When A New Player Joins The World

execute as @e[tag=!joined] run gamestage add @s expert_locked
execute as @e[tag=!joined] run gamestage add @s master_locked




#New World Join End
function stage:newworldjoinend
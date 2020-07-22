# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all


@felicia=User.create!(username:'felicia', email: 'myemail@email.com', password: '123456', location: 'nyc', age: 34, name: 'felicia c', avatar_url: 'https://imgur.com/eX1VEaI.jpg')
@steve=User.create!(username:'stevefitnyc', email: 'steve@email.com', password: '123456', location: 'NJ', age: 35, name: 'Stephen G Csolak', avatar_url: 'https://i.imgur.com/7SwqkoR.jpg')
@crystal=User.create!(username:'frotbrightcry', email: 'crystal@email.com', password: '123456', location: 'Queens, NY', age: 27, name: 'Crystal Chan', avatar_url: 'https://imgur.com/asjbXQr.jpg')
@marlyn=User.create!(username:'mhern65', email: 'marlyn@email.com', password: '123456', location: 'Long Island, NY', age: 65, name: 'Marlyn Hernandez', avatar_url: 'https://imgur.com/lO7fqUx.jpg')
@chris=User.create!(username:'cc1chris', email: 'chris@email.com', password: '123456', location: 'Yonkers, NY', age: 25, name: 'Christopher Fernandez', avatar_url: 'https://imgur.com/7JgeFsO')
@prima=User.create!(username:'primatheshiba', email: 'dog@email.com', password: '123456', location: 'USA', age: 42, name: 'Prima Shiba', avatar_url: 'https://imgur.com/VS5sE0y.jpg')

@firstpost=Post.create!(title: 'cardio tuesday', content: 'I crushed my cycling session today! It felt so good to build up a sweat. I was feeling sore from my previous workout, but cycling helped with the soreness. I will be treating myself to some ice cream', exercise_type: 'Cycling', exercise_duration: '45min', calories: 300, user_id: @felicia.id, photo_url: 'https://imgur.com/QG7ZyPd.jpg')
@secondpost=Post.create!(title: 'Lifting on Wed', content: 'Hardcore Kettlebell workout was so much fun. My set consisted of 5x20 Russian-style swings at 12kg, 3x5 Turkish Get-Ups, and finished with 3x8 snatch', exercise_type: 'Resistance', exercise_duration: '60min', calories: 500, user_id: @felicia.id)
@thirdpost=Post.create!(title: 'Yoga on Friday', content: "Nice and fluid vinyasa flow to end the week. This was more of flexibilty-based class which was the perfect way to end the week. My standing split is improving and the progress is coming along.", exercise_type: 'Yoga', exercise_duration: '60min', calories: 250, user_id: @felicia.id, photo_url: 'https://imgur.com/QG7ZyPd.jpg')
@fourtpost=Post.create!(title: 'Getting started!', content: "I am beginning my fitness journey by training for my first 10k. A marathon is something I have dreamed in participating in, but I know I will have to build up to it. I am excited to see where this journey will take me. Today I had my first 2.5mi run", exercise_type: 'Running', exercise_duration: '30min', calories: 250, user_id: @marlyn.id, photo_url: 'https://imgur.com/0P6GOsm.jpg')
@fifthpost=Post.create!(title: 'Second Run', content: "Not going to lie - this workout was struggle! I was feeling lazy and unmotivated, but speaking to my coach got my butt into gear. I started with an easy jog and was able to build to a short 10 second sprint. Feeling strong!", exercise_type: 'Running', exercise_duration: '40min', calories: 350, user_id: @marlyn.id)
@sixthpost=Post.create!(title: 'Finishing the week strong.', content: "Today I went on my longest run yet - 4miles! I can't believe the progress I am making. I remember not being able to run for one block. I am exhausted but happy.", exercise_type: 'Running', exercise_duration: '40min', calories: 350, user_id: @marlyn.id)
@seventhpost=Post.create!(title: 'Dragonboat season is here.', content: "First time on the water since last season. We started off with a short dry-land session of bodyweight drills, then got in the boat. It felt great to get back into the swing of things.", exercise_type: 'Rowing', exercise_duration: '80min', calories: 500, user_id: @crystal.id, photo_url: 'https://imgur.com/duYono2.jpg')
@eighthpost=Post.create!(title: 'Death by WOD', content: "I don't recall the name of this specific WOD, but it was intense! Here's what we did. 10min EMOM - 10/10/10 air squats, hand-release push-ups, box jumps.", exercise_type: 'Crossfit', exercise_duration: '60min', calories: 600, user_id: @crystal.id, photo_url: 'https://imgur.com/0qckxyF.jpg')
@ninthpost=Post.create!(title: 'Recovery Day', content: "I was feeling pretty beat up from last workout. I decided to take a gentle yoga class to help recover. Pidgeon pose felt great for my tight hips. I am planning to get back to rowing tomorrow.", exercise_type: 'Yoga', exercise_duration: '60min', calories: 250, user_id: @crystal.id)
@tenthpost=Post.create!(title: 'Bodybuilder cut begins now!', content: "With 12 weeks out to my next competition, I am beginning to transition from a hypertrophy program to more conditioning. I plan to implement athletic conditioning drills such as speed ladder work and plyometric. Today I executed a HIIT circuit.", exercise_type: 'HIIT', exercise_duration: '40min', calories: 400, user_id: @steve.id)
@eleventhost=Post.create!(title: 'sk8t3', content: "Met up with the crew to cruise around town. We hit the local park then grabbed some beers.", exercise_type: 'Skateboarding', exercise_duration: '60min', calories: 400, user_id: @chris.id)
@twelvethpost=Post.create!(title: 'My first SUP', content: "I got a SUP for my birthday! We took it out to the lake and I had a great time. I was worried I wouldn't be able to maintain my balance, but I did great! Stand-up paddleboarding is definitely a workout. I feel my core so much.", exercise_type: 'Stand-Up Paddleboarding', exercise_duration: '60min', calories: 320, user_id: @prima.id)
@thirteenthpost=Post.create!(title: 'In my Ashtanga Flow', content: "I am back to practicing Ashtanga regularly! While I started with the primary series, I felt strong enough to transition to the intermediate after the standing postures. Suprisingly, I got into Kapotasana with ease!", exercise_type: 'Yoga', exercise_duration: '80min', calories: 400, user_id: @felicia.id, photo_url: 'https://imgur.com/4olo1BJ.jpg')

@firstcomment=Comment.create!(content: "Nice work!", post: @firstpost, user: @felicia )
@secondcomment=Comment.create!(content: "Nice work!", post: @firstpost, user: @felicia)
@thirdcomment=Comment.create!(content: "Nice work!", post: @firstpost, user: @felicia)



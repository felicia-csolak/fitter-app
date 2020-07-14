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


@felicia=User.create!(username:'felicia', email: 'myemail@email.com', password: '123456', location: 'nyc', age: 34)

@firstpost=Post.create!(title: 'cardio tuesday', content: 'I crushed my cycling session today!', exercise_type: 'Cycling', exercise_duration: '45min', calories: 300, user_id: @felicia.id)

@secondpost=Post.create!(title: 'Lifting on Wed', content: 'Hardcore Kettlebell workout was so much fun.', exercise_type: 'Resistance', exercise_duration: '60min', calories: 500, user_id: @felicia.id)

@thirdpost=Post.create!(title: 'Yoga on Friday', content: 'Nice and fluid vinyasa flow to end the week.', exercise_type: 'Yoga', exercise_duration: '60min', calories: 250, user_id: @felicia.id)

@firstcomment=Comment.create!(content: "Nice work!", post: @firstpost, user: @felicia )
@secondcomment=Comment.create!(content: "Nice work!", post: @firstpost, user: @felicia)
@thirdcomment=Comment.create!(content: "Nice work!", post: @firstpost, user: @felicia)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

# Seed users table
User.destroy_all

indiana = { first_name: "Indiana", last_name: "Jones",
  email: "treasure@gmail.com",
  password: "treasure",
  photo: "https://i.pinimg.com/564x/9e/1a/c2/9e1ac2c5d9e21076dd5f4566730840d0.jpg"
}
demo = User.create!(indiana)

profile_pics = [
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile1.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile2.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile3.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile4.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile5.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile6.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/profile-pics/profile7.jpg",
  ]

7.times do |i|
  user = {first_name: Faker::Name.first_name, last_name: Faker::Name.last_name,
  email: Faker::Internet.email, password: "fakePassword", company_name: Faker::Company.name,
  description: Faker::HitchhikersGuideToTheGalaxy.quote,
  photo: profile_pics[i]}
  newUser = User.create!(user)
end

# Seed campagins table
Campaign.destroy_all
campaign_photos = [
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_game-small.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_game-small.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_tech4.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_tech4-small.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_art1.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_art1-small.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_pen.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_pen-small.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_pottery1.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_pottery1-small.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_stuff.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_stuff-small.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_bike.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_bike-small.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaign_watch.jpg",
  "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_watch-small.jpg"
]
user_count = User.all.length

8.times do |j|
  project = {title: title = Faker::Lorem.words(2).join(' '),
    short_description: Faker::Lorem.sentence, long_description:
    Faker::Lorem.paragraphs(rand(3..4)).join('\n'), goal: Faker::Number.between(1000, 20000),
    duration: Faker::Number.between(30,90), main_photo_url: campaign_photos[(j+1)*2-2],
    small_photo_url: campaign_photos[(j+1)*2-1], owner_id: User.all[(user_count-1)%3].id,
    start_date: Faker::Date.between(1.year.ago, Date.today)}
  newCampaign = Campaign.create!(project)
end

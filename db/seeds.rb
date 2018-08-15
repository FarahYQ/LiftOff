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

# user_count = User.all.length

# 8.times do |j|
#   project = {title: title = Faker::Lorem.words(2).join(' '),
#     short_description: Faker::Lorem.sentence, long_description:
#     Faker::Lorem.paragraphs(rand(3..4)).join('\n'), goal: Faker::Number.between(1000, 20000),
#     duration: Faker::Number.between(30,90), main_photo_url: campaign_photos[(j+1)*2-2],
#     small_photo_url: campaign_photos[(j+1)*2-1], owner_id: User.all[(user_count-1)%3].id,
#     start_date: Faker::Date.between(1.year.ago, Date.today)}
#   newCampaign = Campaign.create!(project)
# end

# 1st campaign
title1 = 'Ultimate Arcade Machine'
sd_1 = "Arcade machine with modern technology"
ld_1 = "We've created the ultimate arcade gaming console to bring back the old arcade gaming experience. 
  However, this time the machine can handle 4k video and is
  compatible with Halo, WoW, GTA, and Dota 2. You can connect with other players when playing an RPG
  regardless of whether they are on another Ultimate Arcade Machine or on a different console. You 
  can log in to your account or play and then upload your score. Our ultimate goal is to create 
  arcade rooms throughout the world to bring modern gamers together!"
goal1 = 45000
dur1 = 80
mp_1 = campaign_photos[0]
sp_1 = campaign_photos[1]
owner_id1 = User.all[1].id
project1 = {
  title: title1, short_description: sd_1, long_description: ld_1,
  goal: goal1, duration: dur1, main_photo_url: mp_1,
  small_photo_url: sp_1, owner_id: owner_id1, start_date: Faker::Date.between(1.year.ago, Date.today)
}
Campaign.create!(project1)

# 2nd campaign
title2 = "Video Processor Software"
sd_2 = "We've created automated video processing software"
ld_2 = "This software can take your videos and optimizing parameters to create professional style videos. Wander and explore during 
  your travels while capturing them on your phone, camera, or goPro. Once you've captured all the footage that you need or want, upload them into 
  our application. Your can create professional style videos for special events and trips. Super user friendly with several tutorials on our 
  website. Half of our proceeds go to scholarships for film and photography students. This application was created by App Academy students that combined 
  their love of writing code and their passion for photography/videography."
goal2 = 42000
dur2 = 60
mp_2 = campaign_photos[2]
sp_2 = campaign_photos[3]
owner_id2 = User.all[0].id
project2 = {
  title: title2, short_description: sd_2, long_description: ld_2,
  goal: goal2, duration: dur2, main_photo_url: mp_2,
  small_photo_url: sp_2, owner_id: owner_id2, start_date: Faker::Date.between(1.year.ago, Date.today)
}
Campaign.create!(project2)

# 3rd campaign
title3 = 'Hooked On Art'
sd_3 = "Painting, drawing, music, and dance programs for kids"
ld_3 = "Let's bring art back into our kids' lives in a big way. We are a non-profit program that wants kids to grow up knowing how to express
  themselves through art. Dance til you can't move. Paint a mural so the whole city can see. Photograph to capture memories. 
  Anyone under 21 can join!"
goal3 = 15000
dur3 =  45
mp_3 = campaign_photos[4]
sp_3 = campaign_photos[5]
owner_id3 = User.all[2].id
project3 = {
  title: title3, short_description: sd_3, long_description: ld_3,
  goal: goal3, duration: dur3, main_photo_url: mp_3,
  small_photo_url: sp_3, owner_id: owner_id3, start_date: Faker::Date.between(1.year.ago, Date.today)
}
Campaign.create!(project3)

# 4th campaign
title4 = "Everlasting Penwriter"
sd_4 = "You can write and write and write and never run out of ink"
ld_4 = "Named after Charlie and the Chocolate Factory's Everlasting Gobstopper, this pen will never run out. As long as you have it, you'll always 
  a utencil to put your thoughts on paper. This uses a revolutionary proprietary technology... ok ok. We'll tell you: it never runs out 
  because you dip it in ink. It's not really new technology. The motivation for this 
  campaign is to create less waste while bringing back old style of writing. It comes in many styles but the most popular 
  is our classic gold caligraphy pen."
goal4 = 12000
dur4 = 45
mp_4 = campaign_photos[6]
sp_4 = campaign_photos[7]
owner_id4 = User.all[1].id
project4 = {
  title: title4, short_description: sd_4, long_description: ld_4,
  goal: goal4, duration: dur4, main_photo_url: mp_4,
  small_photo_url: sp_4, owner_id: owner_id4, start_date: Faker::Date.between(1.year.ago, Date.today)
}
Campaign.create!(project4)

# 5th campaign
title5 = "Clay Pottery from Nicaragua Project"
sd_5 = "Fund a Potters for Peace project"
ld_5 = "This is a campaign to fund a great project for Potters for Peace. They have had a presence in Nicaragua since 1989. 
  They assist potters in obtaining technologies that can make their work economically sustainable. They also help them find 
  markets outside of their local communities. If you contribute to this project, you will be helping local Nicaraguan 
  communities thrive while keeping their pottery and art alive and well. Visit pottersforpeace.org for more info!"
goal5 = 19000
dur5 = 60
mp_5 = campaign_photos[8]
sp_5 = campaign_photos[9]
owner_id5 = User.all[2].id
project5 = {
  title: title5, short_description: sd_5, long_description: ld_5, 
  goal: goal5, duration: dur5, main_photo_url: mp_5, 
  small_photo_url: sp_5, owner_id: owner_id5, start_date: Faker::Date.between(1.year.ago, Date.today)
}
Campaign.create!(project5)

# 6th campaign
title6 = "Crafty Care Package"
sd_6 = "Send a care package to your crafty friends"
ld_6 = "This care package contains essential items when entering the world of arts and crafts. These items are curated by 
  local artists and will help you start creating your own products. You can get a mystery box or fill out a questionaire to 
  receive items that will fit your interests. The most popular products are the old style camera, customized stamps, artists' 
  pens and pencils. All proceeds will go towards the Hooked on Art Project to fund art programs for kids."
goal6 = 10000
dur6 = 30
mp_6 = campaign_photos[10]
sp_6 = campaign_photos[11]
owner_id6 = User.all[2].id
project6 = {
  title: title6, short_description: sd_6, long_description: ld_6,
  goal: goal6, duration: dur6, main_photo_url: mp_6, 
  small_photo_url: sp_6, owner_id: owner_id6, start_date: Faker::Date.between(1.year.ago, Date.today)
}
Campaign.create!(project6)

# 7th campaign 
title7 = "Solar Bike"
sd_7 = "Solar powered electric bike to fuel your long distance rides using the sun"
ld_7 = "Our solar powered bike contains the latest solar technology embedded in various parts of the bike to optimize 
  the conversion of the energy of light into electricity. The energy is stored in micro batteries inside the bike that 
  will help you pedal. The bike is built out of titanium for decrease weight and increase performance. This is great for commutes 
  to work or long distance rides to get away from it all. Comes in various sizes and in colors white, black, yellow, blue, or red. Get 
  this bike and optimize your ride while helping to save the environment."
goal7 = 100000
dur7 = 90
mp_7 = campaign_photos[12]
sp_7 = campaign_photos[13]
owner_id7 = User.all[3].id
project7 = {
  title: title7, short_description: sd_7, long_description: ld_7,
  goal: goal7, duration: dur7, main_photo_url: mp_7,
  small_photo_url: sp_7, owner_id: owner_id7, start_date: Faker::Date.between(1.year.ago, Date.today)
}
Campaign.create!(project7)

# 8th campaign
title8 = "Smart Real Watch"
sd_8 = "Smart watch disguised as a regular watch"
ld_8 = "There are many smart watches in the market today. However, very few have the style and class that watches used to have. Our 
  line of watches contain real gears and hands to tell you the time the old fashions way. But the overlaying glass can display all the 
  features that you expect of smart watches. Click a button on the side, and your text messages, pulse, weather, and more can be displayed. 
  The smart features can be customized using our app available on Android and iOS. We combine classic style with modern technology."
goal8 = 65000
dur8 = 50
mp_8 = campaign_photos[14]
sp_8 = campaign_photos[15]
owner_id8 = User.all[6].id
project8 = {
  title: title8, short_description: sd_8, long_description: ld_8,
  goal: goal8, duration: dur8, main_photo_url: mp_8,
  small_photo_url: sp_7, owner_id: owner_id8, start_date: Faker::Date.between(1.year.ago, Date.today)
}
Campaign.create!(project8)







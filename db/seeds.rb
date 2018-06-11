# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

indiana = { first_name: "Indiana", last_name: "Jones",
  email: "treasure@gmail.com",
  password: "treasure"
}
User.destroy_all
demo = User.create!(indiana)
exp1_small_photo = "https://i.pinimg.com/564x/d1/c0/53/d1c053e3afbad24bf3a39373ee9ce5f9.jpg"
exp1_main_photo = "https://i.pinimg.com/564x/04/f0/7b/04f07bc47b7f3dcf49de089d412e936b.jpg"

exp1_long_description = " An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact. However, he will have to fight his enemy Rene Belloq and a band of Nazis in order to reach it."


expedition1 = { title: "Find Lost Ark", short_description: "Brave an ancient
  booby trapped temple in Peru to retrieve golden idol",
  long_description: exp1_long_description, goal: 70000, duration: 60,
  main_photo_url: exp1_main_photo, small_photo_url: exp1_small_photo,
  owner_id: demo.id, start_date: DateTime.now}

Campaign.destroy_all
exp1 = Campaign.create!(expedition1);

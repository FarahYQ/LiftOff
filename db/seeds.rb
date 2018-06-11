# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

indiana = { first_name: "Indiana", last_name: "Jones",
  email: "treasure@gmail.com",
  password: "treasure",
  photo: "https://i.pinimg.com/564x/9e/1a/c2/9e1ac2c5d9e21076dd5f4566730840d0.jpg"
}
zoologist = { first_name: "Eliza", last_name: "Thornberry",
  email: "animals@gmail.com",
  password:"animals",
  photo: "https://images.unsplash.com/photo-1517241938558-898c3afe02c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd6ab130a3a8e78ab7e7ce5550fe519e&auto=format&fit=crop&w=1502&q=80"
}
elon = {first_name: "Elon", last_name: "Musk",
  email: "boring@gmail.com",
  password:"boring",
  company_name: "boring",
  photo: "https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"}

User.destroy_all
demo = User.create!(indiana)
user1 = User.create!(zoologist)
user2 = User.create!(elon)


exp1_sp = "https://i.pinimg.com/564x/d1/c0/53/d1c053e3afbad24bf3a39373ee9ce5f9.jpg"
exp1_mp = "https://i.pinimg.com/564x/04/f0/7b/04f07bc47b7f3dcf49de089d412e936b.jpg"
exp1_ld = " An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact. However, he will have to fight his enemy Rene Belloq and a band of Nazis in order to reach it."
project1 = { title: "Find Lost Ark", short_description: "Brave an ancient
  booby trapped temple in Peru to retrieve golden idol",
  long_description: exp1_ld, goal: 70000, duration: 60,
  main_photo_url: exp1_mp, small_photo_url: exp1_sp,
  owner_id: demo.id, start_date: DateTime.now}


camp2_ld = "Our zoo keeps many endangered animals safe. We have trained zoologists
and wildlife scientists. A zoo, also known as a zoological park or zoological
garden, is a place where animals are confined within enclosures for the public
to view. Many zoos also breed the animals. There are currently over 1,000 large animal
collections open to the public – 80% of them in major cities. The name comes from zoology,
the study of animals."
project2 = {title: "Save our zoo!",
  short_description: "We need support keeping our wildlife sanctuary afloat!", long_description: camp2_ld,
goal: 400000, duration: 90, main_photo_url: "https://unsplash.com/photos/O6DUoIl6NWA",
small_photo_url: "https://unsplash.com/photos/C32BBKEcmOg", owner_id: user1.id, start_date: DateTime.now }

camp3_ld = "Find homes for cats! 'The greatness of a nation and its moral
progress can be judged by the way its animals are treated.' - Mahatma Gandhi"
camp3_mp = "https://images.unsplash.com/photo-1490481920145-fc78891bbb99?ixlib=rb-0.3.5&s=04330e415eba7ccac24c2554856b6cbc&auto=format&fit=crop&w=1350&q=80"
camp3_sp = "https://images.unsplash.com/photo-1505503076934-b9b847ee95ad?ixlib=rb-0.3.5&s=78a2744c16cbbb6da0e754e06a6d917d&auto=format&fit=crop&w=3300&q=80"
project3 = {title: "Find homes for cats", short_description: "These cats want a
  home with you!", long_description: camp3_ld, goal: 50000, duration: 38,
  main_photo_url: camp3_mp, small_photo_url:
  camp3_sp, owner_id: user1.id,
  start_date: DateTime.now}

camp4_ld = 'Apparently, some customs agencies are saying they won’t allow
shipment of anything called a "Flamethrower". To solve this, we are renaming it
"Not a Flamethrower"'
camp4_mp = "https://images.unsplash.com/photo-1497406703182-f805b8fbba89?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7598c4ba7994f83dab58ae34f1abd023&auto=format&fit=crop&w=3192&q=80"
camp4_sp = "https://images.unsplash.com/photo-1510010023939-f031496b4c88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2e241e85747eca6f2b4168a7eebaa6ce&auto=format&fit=crop&w=1500&q=80"
project4 = {title: "Temperature Enhancement Device", short_description: "Obviously, a flamethrower is a super terrible idea. Definitely don’t buy one.",
long_description: camp4_ld, goal: 500000, duration: 90, main_photo_url: camp4_mp,
small_photo_url: "camp4_sp", owner_id: user2.id, start_date: DateTime.now}

Campaign.destroy_all
camp1 = Campaign.create!(project1)
camp2 = Campaign.create!(project2)
camp3 = Campaign.create!(project3)

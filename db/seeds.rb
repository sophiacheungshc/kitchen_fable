# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Restaurant.destroy_all
Reservation.destroy_all


user1 = User.create!(
  email: 'guest@welcome.com',
  password: 'demologin',
  fname: 'Guest',
  lname: 'Demo',
  location: 'San Francisco'
)

user2 = User.create!(
  email: 'sophia@sophiaiscool.com',
  password: 'password',
  fname: 'Sophia',
  lname: 'Soaps',
  location: 'San Diego'
)

user3 = User.create!(
  email: 'kavya@font-awesome.com',
  password: 'sophiasophia',
  fname: 'Kavya',
  lname: 'Hemsworth',
  location: 'San Francisco'
)

user4 = User.create!(
  email: 'email@email.email',
  password: 'emailemailemail',
  fname: 'Chris',
  lname: 'EMail',
  location: 'San Francisco'
)

user5 = User.create!(
  email: 'jimmynguyen@linked.in',
  password: 'pleasehireme',
  fname: 'Jimmy',
  lname: 'Nguyen',
  location: 'Los Angeles'
)
user6 = User.create!(
  email: 'kevinla79@aa.io',
  password: 'pleaserefermeJimmy',
  fname: 'Kevin',
  lname: 'La',
  location: 'San Francisco'
)

50.times do
  User.create(
    email: Faker::Internet.unique.email,
    password: "password123",
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    location: ["San Francisco", "San Diego", "New York", "Los Angeles"].sample
  )
end

rest1 = Restaurant.create!(
  name: "Marta",
  address: "29 East 29th Street, New York, NY 10016",
  location: "New York",
  phone_number: "(212) 651-3800",
  cuisine: "Italian",
  menu: "https://www.martamanhattan.com/menus/",
  hours: "Monday - Sunday: 12:00 PM - 11:00 PM",
  dress_code: "Casual",
  exec_chef: "Joe Tarasco",
  description: "Marta is a lively Italian restaurant helmed by Executive Chef Joe Tarasco. Inspired by the rustic tradition of Roman pizzerie, local haunts that churn out thin, crackly-crusted pizzas, Marta features an energetic open kitchen with two wood-burning ovens and an open-fire grill taking center stage."
)
rest2 = Restaurant.create!(
  name: "Gramercy Tavern",
  address: "42 E. 20th St, New York, NY 10003",
  location: "New York",
  phone_number: "(212) 477-0777",
  cuisine: "American",
  menu: "https://www.gramercytavern.com/menus/the-tavern/",
  hours: "Monday - Friday: 12:00 PM - 11:00 PM, Saturday - Sunday: 5:30 PM - 11:00 PM",
  dress_code: "Casual",
  exec_chef: "Michael Anthony",
  description: "The restaurant features an acclaimed wine list and thoughtfully selected beer and cocktail offerings. One of America’s most beloved restaurants, Gramercy Tavern has welcomed guests for over 23 years to enjoy seasonal American cuisine, warm hospitality and unparalleled service. The restaurant is ranked at the top of Zagat Survey’s Most Popular list and has garnered eight James Beard Awards including Outstanding Restaurant and Best Chef NYC."
)

rest3 = Restaurant.create!(
  name: 'Kusakabe',
  address: '584 Washington Street, San Francisco, CA 94111',
  location: 'San Francisco',
  phone_number: '415-757-0155',
  cuisine: 'Japanese',
  menu: 'https://kusakabe-sf.com/menu/',
  hours: 'Monday - Saturday: 5:00pm - 10:00pm',
  dress_code: 'Causal Elegant',
  exec_chef: 'Mitsunori Kusakabe',
  description: 'Kusakabe is a gourmet sushi experience in San Francisco that offers diners a delicious way to taste a style of sushi they may not be familiar with. The chef at Kusakabe serves a prix fixe meal every night that features the Kaiseki style of sushi. After the meal has been served, diners may order additional fare from the a la carte menu.',
)

rest4 = Restaurant.create!(
  name: 'Brenda\'s French Soul Food',
  address: '652 Polk St San Francisco, CA 94102',
  location: 'San Francisco',
  phone_number: '415-345-8100',
  cuisine: 'Southern',
  menu: 'http://frenchsoulfood.com/dinner',
  hours: 'Monday – Tuesday: 8am – 3pm, Wednesday – Saturday: 8am – 10pm, Sunday: 8am – 8pm',
  dress_code: 'Business Causal',
  exec_chef: 'Chef John',
  description: 'Fresh takes on beignets, po boys & other Big Easy bites draw crowds to this narrow but airy spot. Chef-owner Brenda Buenviaje blends New Orleans–style Creole cooking with French technique to invent \'French soul food.\' Expect updated classics like cayenne-spiked crawfish beignets, fluffy cream biscuits, impeccable Hangtown Fry (eggs, bacon and cornmeal-crusted oysters) and fried chicken with collard greens and hot-pepper jelly. Long waits on sketchy sidewalks are unavoidable – but you can order takeout.'
)

rest5 = Restaurant.create!(
  name: 'The Cavalier',
  address: '360 Jessie Street San Francisco, CA 94103',
  location: 'San Francisco',
  phone_number: '415-321-6000',
  cuisine: 'British',
  menu: 'https://thecavaliersf.com/menus/',
  hours: 'Lunch: Monday - Friday: 11:30am - 2:30pm, Sunday: 5:30pm - 9:00pm',
  dress_code: 'Business Causal',
  exec_chef: 'Jennifer Puccio',
  description: 'The Cavalier is an all-day London-inspired brasserie, located adjacent to Hotel Zetta. This is the third property for restaurateur Anna Weinberg and Executive Chef Jennifer Puccio - the same team behind Marlowe and Park Tavern. Award winning San Francisco designer, Ken Fulk, revamped the interior with deep leather banquettes, polished brass, zinc and white marble, lending a posh and sultry feel.'
      
)

100.times do
    name = Faker::Restaurant.name
    next if Restaurant.exists?(name: name)
    location = ["San Francisco", "San Diego", "New York", "Los Angeles", "Chicago", "Las Vegas"].sample

    Restaurant.create!({
      name: name,
      address: Faker::Address.street_address + ", " + location,
      location: location,
      phone_number: Faker::PhoneNumber.cell_phone,
      cuisine: Restaurant::CUISINES.sample,
      menu: 'https://thisisafakerestaurant/menus/',
      hours: "Monday - Friday: 12:00 PM - 11:00 PM, Saturday - Sunday: 5:30 PM - 11:00 PM",
      dress_code: ['Business Causal','Causal Elegant',"Casual"].sample,
      exec_chef: Faker::Name.name,
      description: Faker::Restaurant.description
    })
end

5.times do
  min_date = Time.now 
  max_date = Time.now + 3.year
  
  Reservation.create!({
    user_id: 1,
    rest_id: (1..50).to_a.sample,
    time: "#{("1".."12").to_a.sample}:00 PM",
    date: rand(min_date..max_date).to_s[0..9],
    party: (1..20).to_a.sample,
    occasion: ['none', 'birthday', 'anniversary', 'promotion', 'just hired!', 'treat yo self'].sample
  })
end

5.times do
  min_date = Time.now - 3.years
  max_date = Time.now 
  
  Reservation.create!({
    user_id: 1,
    rest_id: (1..50).to_a.sample,
    time: "#{("1".."12").to_a.sample}:00 PM",
    date: rand(min_date..max_date).to_s[0..9],
    party: (1..20).to_a.sample,
    occasion: ['none', 'birthday', 'anniversary', 'promotion', 'just hired!', 'treat yo self'].sample
  })
end
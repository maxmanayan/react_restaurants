# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "faker"

Restaurant.destroy_all


10.times do |i|
  Restaurant.create(
    name: Faker::Restaurant.name,
    rating: Faker::Number.between(from: 1, to: 5),
    review: Faker::Restaurant.review,
  )
end


puts "Seeded #{Restaurant.all.size} new restaurants"
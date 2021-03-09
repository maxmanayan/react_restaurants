class Api::RestaurantsController < ApplicationController

  def index 
    render json: Restaurant.all
  end

end

def show 
  render json: restaurant.find(params[:id])

end

def create 
   restaurant = Restaurant.new(restaurant_params)
   restaurant.rating = 0
   if restaurant.save
      render json: restaurant
   else
     render json: { errors: restaurant.errors }, status: :unprocessable_entity 
   end
end

def update
 restaurant = Restaurant.find(params[:id])
 if restaurant.update(restaurant_params)
  render json: restaurant
else
  render json: {errors: restaurant.errors}, status: :unprocessable_entity
end
private
  def restaurant_params
    params.require(:restaurant).permit(:name, :review)
  end
end

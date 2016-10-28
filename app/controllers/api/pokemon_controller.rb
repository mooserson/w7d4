class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      response.status = 500
      render json: @pokemon.errors.full_messages
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :poke_type, :moves, :attack, :defense, :image_url)
  end

end

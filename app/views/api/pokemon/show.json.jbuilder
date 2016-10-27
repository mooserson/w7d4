json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type

json.set! :items do
  json.array! @pokemon.items, partial: 'api/pokemon/item', as: :item
end

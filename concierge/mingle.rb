require "rexml/document"
require 'sinatra'
require 'mingle_party'
require 'crack'
require 'rack/cors'
require 'sinatra/jsonp'

use Rack::Cors do
  allow do
    origins '*'
    resource '*', :headers => :any, :methods => [:get, :post, :options]
  end
end

get '/cards' do
  cards = MingleParty.new.fetch_cards
  jsonp cards
end

get '/card/:number' do |number|
  car = MingleParty.new.fetch_card(number)
  jsonp card
end

get '/murmurs' do
  murmurs = MingleParty.new.murmurs
  puts "[DEBUG] murmurs => #{murmurs.inspect}"
  
  jsonp murmurs
end

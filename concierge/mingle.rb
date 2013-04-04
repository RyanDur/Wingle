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
  mingle = MingleParty.new
  cards = mingle.fetch_cards
  jsonp cards
end

get '/card/:number' do |number|
  mingle = MingleParty.new
  card = mingle.fetch_card(number)
  jsonp card
end

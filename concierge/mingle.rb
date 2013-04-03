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

get '/card' do
  mingle = MingleParty.new
  card = mingle.fetch_card(1)
  jsonp card
end

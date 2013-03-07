require 'spec_helper'

describe "CardWalls" do
  describe "GET /card_walls" do
    it "works! (now write some real specs)" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      get card_walls_path
      response.status.should be(200)
    end
  end
end

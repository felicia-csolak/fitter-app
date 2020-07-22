class AddPhotoUrlToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :photo_url, :string
  end
end

class AddCaloriesToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :calories, :integer
  end
end

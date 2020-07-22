class AddUsernameIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :username_id, :integer
  end
end

class RemoveUsernameIdFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :username_id, :integer
  end
end

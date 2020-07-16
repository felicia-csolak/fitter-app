class AddExerciseTypeToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :exercise_type, :string
  end
end

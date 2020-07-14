class AddExerciseDurationToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :exercise_duration, :string
  end
end

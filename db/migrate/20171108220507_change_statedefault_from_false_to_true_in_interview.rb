class ChangeStatedefaultFromFalseToTrueInInterview < ActiveRecord::Migration[5.1]
  class ChangeStateTypeInInterview < ActiveRecord::Migration[5.1]
    def change
      remove_column :interviews, :state
      add_column :interviews, :state,  :boolean, default: false, null: false
    end
  end

end
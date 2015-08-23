class RemoveNameToContact < ActiveRecord::Migration
  def change
    remove_column :contacts, :name, :string
  end
end

require_relative 'spec_helper'

describe "#tree_levels" do
  TreeNode = Struct.new(:value, :left, :right)
  tree = TreeNode.new(0,
    TreeNode.new(1,
  nil,
      TreeNode.new(2, nil, nil)
    ),
    TreeNode.new(3,
      TreeNode.new(4, nil, nil),
      TreeNode.new(5,
        TreeNode.new(6, nil, nil),
        nil
  ) )
  )
specify { tree_levels(tree).should == [[0], [1, 3], [2, 4, 5], [6]] }

end




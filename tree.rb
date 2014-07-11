def tree_levels(tree)
  result = [root(tree)]
  result << childrens(tree) #get 1st level

  # separate by subtrees
  left_subtree = tree.left
  right_subtree = tree.right

  while true do
    result << [childrens(left_subtree), childrens(right_subtree)].flatten
    left_subtree = left_subtree.left if left_subtree
    right_subtree = right_subtree.right if right_subtree
    break unless left_subtree or right_subtree
  end

  result
end

def childrens(subtree)
  left = subtree.left.value if subtree and subtree.left
  right = subtree.right.value if subtree and subtree.right
  [left, right].compact
end

def root(tree)
  [tree.value]
end
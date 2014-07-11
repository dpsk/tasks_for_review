def non_duplicates(arr)
  arr.group_by{|i| i}.map{|el, arr| el if arr.size.eql?(1) }.compact
end

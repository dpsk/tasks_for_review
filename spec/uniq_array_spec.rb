require_relative 'spec_helper'

describe "#uniq_array" do
  specify { non_duplicates([10, 1, 2, 10, 30, -1, 2]).should == [1, 30, -1] }
  specify { non_duplicates([10, 10, 0, 10, 0, 0, 0, 0, 2]).should == [2] }
  specify { non_duplicates([]).should == [] }
end
* Non-duplicate Elements
Please write function which accepts array of integers a and returns another array which consists of non duplicate elements of a, i.e. elements which appear in a only once.

    ``uniq_array.rb``
    
    ``rspec spec/uniq_array.rb# for tests``

* Tree Levels
Please write function tree_levels which takes one argument tree and returns its elements grouped into levels. Returned value should be an array of levels ordered from top to bottom. Each level is an array of values taken from tree nodes residing on a given tree level ordered from left to right.

    ``tree.rb``

    ``rspec spec/tree_spec.rb #for tests``

* Basic Data Scraping
Please write ruby script which accepts single argument, android app package name (e.g. com.rovio.angrybirds), fetches ratings breakdown for given app and outputs it like in the following example. Extra code for error handling and arguments validation can bring bonus points for this task.

    ``ruby gp_rating_breakdown.rb game_name``
    
    No specs for this one since it's too much hassle to emulate script run from rspec

* Parcel Delivery
The MoveFast company provides parcel delivery services. Their typical customers buy stuff on eBay asking this stuff to be delivered (usually for free) to one of MoveFast warehouses. MoveFast accumulates goods, then repacks and sends those to customers for small affordable fee. In order to provide best user experience MoveFast company would like to have online parcel delivery calculator on their website.

    ``move_fast/index.html``
    
    html + js combos was used for this task. I dedcided to skip backend entirely, since there is no need in it. Pure js was used(no jQuery), this much faster, but code a bit blowned up.
    
    Also the reasoning behind width, length and height were unclear to me, since they are not used in any calculation rules and safely can be removed from interface.
    
    There is also no dumb checks for numbers/literlas on inputs, i thought this is beyond this task.

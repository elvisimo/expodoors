Spree::HomeController.class_eval do

  def index
      @searcher = build_searcher(params.merge(include_images: true))
      @products = @searcher.retrieve_products
      @taxonomies = Spree::Taxonomy.includes(root: :children)
      @taxons = Spree::Taxonomy.find(1).taxons.drop(1).first(3)
      
  end

end
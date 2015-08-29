require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Expodoors
  class Application < Rails::Application
    config.autoload_paths += [
        config.root.join('app')
    ]
    config.assets.paths << "#{Rails}/vendor/assets/fonts"
      config.assets.paths << "#{Rails}/assets/images"
      config.assets.paths << "#{Rails}/assets/javascripts"
    config.to_prepare do
      # Load application's model / class decorators
      Dir.glob(File.join(File.dirname(__FILE__), "../app/**/*_decorator*.rb")) do |c|
        Rails.configuration.cache_classes ? require(c) : load(c)
      end

      # Load application's view overrides
      Dir.glob(File.join(File.dirname(__FILE__), "../app/overrides/*.rb")) do |c|
        Rails.configuration.cache_classes ? require(c) : load(c)
      end
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    config.i18n.default_locale = :ru

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true
  end
end

[:preferred_address_requires_state, :preferred_address_requires_state=, :preferred_address_requires_state_default, :preferred_address_requires_state_type, :preferred_admin_interface_logo, :preferred_admin_interface_logo=, :preferred_admin_interface_logo_default, :preferred_admin_interface_logo_type, :preferred_admin_products_per_page, :preferred_admin_products_per_page=, :preferred_admin_products_per_page_default, :preferred_admin_products_per_page_type, :preferred_allow_checkout_on_gateway_error, :preferred_allow_checkout_on_gateway_error=, :preferred_allow_checkout_on_gateway_error_default, :preferred_allow_checkout_on_gateway_error_type, :preferred_allow_guest_checkout, :preferred_allow_guest_checkout=, :preferred_allow_guest_checkout_default, :preferred_allow_guest_checkout_type, :preferred_alternative_shipping_phone, :preferred_alternative_shipping_phone=, :preferred_alternative_shipping_phone_default, :preferred_alternative_shipping_phone_type, :preferred_always_include_confirm_step, :preferred_always_include_confirm_step=, :preferred_always_include_confirm_step_default, :preferred_always_include_confirm_step_type, :preferred_always_put_site_name_in_title, :preferred_always_put_site_name_in_title=, :preferred_always_put_site_name_in_title_default, :preferred_always_put_site_name_in_title_type, :preferred_auto_capture, :preferred_auto_capture=, :preferred_auto_capture_default, :preferred_auto_capture_type, :preferred_auto_capture_on_dispatch, :preferred_auto_capture_on_dispatch=, :preferred_auto_capture_on_dispatch_default, :preferred_auto_capture_on_dispatch_type, :preferred_binary_inventory_cache, :preferred_binary_inventory_cache=, :preferred_binary_inventory_cache_default, :preferred_binary_inventory_cache_type, :preferred_checkout_zone, :preferred_checkout_zone=, :preferred_checkout_zone_default, :preferred_checkout_zone_type, :preferred_company, :preferred_company=, :preferred_company_default, :preferred_company_type, :preferred_currency, :preferred_currency=, :preferred_currency_default, :preferred_currency_type, :preferred_default_country_id, :preferred_default_country_id=, :preferred_default_country_id_default, :preferred_default_country_id_type, :preferred_expedited_exchanges, :preferred_expedited_exchanges=, :preferred_expedited_exchanges_default, :preferred_expedited_exchanges_type, :preferred_expedited_exchanges_days_window, :preferred_expedited_exchanges_days_window=, :preferred_expedited_exchanges_days_window_default, :preferred_expedited_exchanges_days_window_type, :preferred_layout, :preferred_layout=, :preferred_layout_default, :preferred_layout_type, :preferred_logo, :preferred_logo=, :preferred_logo_default, :preferred_logo_type, :preferred_max_level_in_taxons_menu, :preferred_max_level_in_taxons_menu=, :preferred_max_level_in_taxons_menu_default, :preferred_max_level_in_taxons_menu_type, :preferred_orders_per_page, :preferred_orders_per_page=, :preferred_orders_per_page_default, :preferred_orders_per_page_type, :preferred_properties_per_page, :preferred_properties_per_page=, :preferred_properties_per_page_default, :preferred_properties_per_page_type, :preferred_products_per_page, :preferred_products_per_page=, :preferred_products_per_page_default, :preferred_products_per_page_type, :preferred_promotions_per_page, :preferred_promotions_per_page=, :preferred_promotions_per_page_default, :preferred_promotions_per_page_type, :preferred_customer_returns_per_page, :preferred_customer_returns_per_page=, :preferred_customer_returns_per_page_default, :preferred_customer_returns_per_page_type, :preferred_require_master_price, :preferred_require_master_price=, :preferred_require_master_price_default, :preferred_require_master_price_type, :preferred_restock_inventory, :preferred_restock_inventory=, :preferred_restock_inventory_default, :preferred_restock_inventory_type, :preferred_return_eligibility_number_of_days, :preferred_return_eligibility_number_of_days=, :preferred_return_eligibility_number_of_days_default, :preferred_return_eligibility_number_of_days_type, :preferred_shipping_instructions, :preferred_shipping_instructions=, :preferred_shipping_instructions_default, :preferred_shipping_instructions_type, :preferred_show_only_complete_orders_by_default, :preferred_show_only_complete_orders_by_default=, :preferred_show_only_complete_orders_by_default_default, :preferred_show_only_complete_orders_by_default_type, :preferred_show_variant_full_price, :preferred_show_variant_full_price=, :preferred_show_variant_full_price_default, :preferred_show_variant_full_price_type, :preferred_show_products_without_price, :preferred_show_products_without_price=, :preferred_show_products_without_price_default, :preferred_show_products_without_price_type, :preferred_show_raw_product_description, :preferred_show_raw_product_description=, :preferred_show_raw_product_description_default, :preferred_show_raw_product_description_type, :preferred_tax_using_ship_address, :preferred_tax_using_ship_address=, :preferred_tax_using_ship_address_default, :preferred_tax_using_ship_address_type, :preferred_track_inventory_levels, :preferred_track_inventory_levels=, :preferred_track_inventory_levels_default, :preferred_track_inventory_levels_type, :preferred_send_core_emails, :preferred_send_core_emails=, :preferred_send_core_emails_default, :preferred_send_core_emails_type, :searcher_class, :searcher_class=, :configure, :preferences, :reset, :[], :[]=, :get, :set, :method_missing, :get_preference, :set_preference, :preference_type, :preference_default, :has_preference!, :has_preference?, :defined_preferences, :default_preferences, :clear_preferences, :psych_to_yaml, :to_yaml, :to_yaml_properties, :blank?, :present?, :presence, :acts_like?, :duplicable?, :deep_dup, :try, :try!, :in?, :presence_in, :to_param, :to_query, :instance_values, :instance_variable_names, :to_json_with_active_support_encoder, :to_json_without_active_support_encoder, :to_json, :as_json, :with_options, :html_safe?, :dclone, :`, :pretty_print, :pretty_print_cycle, :pretty_print_instance_variables, :pretty_print_inspect, :friendly_id?, :unfriendly_id?, :require_or_load, :require_dependency, :load_dependency, :unloadable, :nil?, :===, :=~, :!~, :eql?, :hash, :<=>, :class, :singleton_class, :clone, :dup, :itself, :taint, :tainted?, :untaint, :untrust, :untrusted?, :trust, :freeze, :frozen?, :to_s, :inspect, :methods, :singleton_methods, :protected_methods, :private_methods, :public_methods, :instance_variables, :instance_variable_get, :instance_variable_set, :instance_variable_defined?, :remove_instance_variable, :instance_of?, :kind_of?, :is_a?, :tap, :send, :public_send, :respond_to?, :extend, :display, :method, :public_method, :singleton_method, :define_singleton_method, :object_id, :to_enum, :enum_for, :gem, :class_eval, :silence_warnings, :enable_warnings, :with_warnings, :silence_stderr, :silence_stream, :suppress, :capture, :silence, :quietly, :concern, :pretty_inspect, :byebug, :debugger, :suppress_warnings, :==, :equal?, :!, :!=, :instance_eval, :instance_exec, :__send__, :__id__]
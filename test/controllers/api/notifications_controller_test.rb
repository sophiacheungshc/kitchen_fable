require 'test_helper'

class Api::NotificationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_notifications_index_url
    assert_response :success
  end

  test "should get create" do
    get api_notifications_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_notifications_destroy_url
    assert_response :success
  end

end

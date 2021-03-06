class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: :create

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: :user
  end

  # GET /posts/1
  def show
    render json: @post, include: [:user, :comments]
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created 
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy_single
    @post = Post.new(post_params)
    @user = User.find(params[:user_id])
    @post.user = @user
    @post.destroy
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :content, :exercise_type, :exercise_duration, :calories, :photo_url)
    end
end

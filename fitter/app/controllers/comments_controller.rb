class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: :create

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments, include: :user
  end

  # GET /comments/1
  def show
    render json: @comment, include: [:user, :post]
  end

  # POST /comments
  def create
    puts "testing"
    @comment = Comment.new(comment_params)
    puts "testing 2"
    @post = Post.find(params[:post_id])
    puts "testing 4", @post
    @comment.post_id = @post.id
    @user = @current_user
    @comment.user_id = @user.id
    puts "printout line 24", @user.id 

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # POST /post/1/
  def create_single
    @comment = Comment.new(comment_params)
    @post = Post.find(params[:post_id])
    @comment.post = @post
  
    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end

  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content)
    end
end

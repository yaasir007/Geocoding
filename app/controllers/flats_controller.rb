class FlatsController < ApplicationController
    
    def index
        @flats = Flat.geocoded
    
        @markers = @flats.map do |flat|
            {
                lat: flat.latitude,
                lng: flat.longitude,
                info_window: render_to_string(partial: "info_window", locals: { flat: flat }),
            }
        end
    end

    def new
        @flat = Flat.new
    end

    def create
        @flat = Flat.new(params_flat)
        @flat.save!
        redirect_to flats_path
    end

    def show
        @flat = Flat.find(params[:id])
    end

    def destroy
        @flat = Flat.find(params[:id])
        @flat.destroy
        redirect_to flats_path
    end

    private

    def params_flat
        params.require(:flat).permit(:name, :address)
    end

end


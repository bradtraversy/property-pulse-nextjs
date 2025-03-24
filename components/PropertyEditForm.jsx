import updateProperty from '@/app/actions/updateProperty';

const PropertyEditForm = ({ property }) => {
  const updatePropertyById = updateProperty.bind(null, property._id);

  return (
    <form action={updatePropertyById}>
      <h2 className='text-3xl text-center font-semibold mb-6'>Edit Property</h2>

      <div className='mb-4'>
        <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
          Property Type
        </label>
        <select
          id='type'
          name='type'
          className='border rounded-sm w-full py-2 px-3'
          required
          defaultValue={property.type}
        >
          <option value='Apartment'>Apartment</option>
          <option value='Condo'>Condo</option>
          <option value='House'>House</option>
          <option value='CabinOrCottage'>Cabin or Cottage</option>
          <option value='Room'>Room</option>
          <option value='Studio'>Studio</option>
          <option value='Other'>Other</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2'>
          Listing Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded-sm w-full py-2 px-3 mb-2'
          placeholder='eg. Beautiful Apartment In Miami'
          required
          defaultValue={property.name}
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='description'
          className='block text-gray-700 font-bold mb-2'
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='border rounded-sm w-full py-2 px-3'
          rows='4'
          placeholder='Add an optional description of your property'
          defaultValue={property.description}
        ></textarea>
      </div>

      <div className='mb-4 bg-blue-50 p-4'>
        <label className='block text-gray-700 font-bold mb-2'>Location</label>
        <input
          type='text'
          id='street'
          name='location.street'
          className='border rounded-sm w-full py-2 px-3 mb-2'
          placeholder='Street'
          defaultValue={property.location.street}
        />
        <input
          type='text'
          id='city'
          name='location.city'
          className='border rounded-sm w-full py-2 px-3 mb-2'
          placeholder='City'
          required
          defaultValue={property.location.city}
        />
        <input
          type='text'
          id='state'
          name='location.state'
          className='border rounded-sm w-full py-2 px-3 mb-2'
          placeholder='State'
          required
          defaultValue={property.location.state}
        />
        <input
          type='text'
          id='zipcode'
          name='location.zipcode'
          className='border rounded-sm w-full py-2 px-3 mb-2'
          placeholder='Zipcode'
          defaultValue={property.location.zipcode}
        />
      </div>

      <div className='mb-4 flex flex-wrap'>
        <div className='w-full sm:w-1/3 pr-2'>
          <label htmlFor='beds' className='block text-gray-700 font-bold mb-2'>
            Beds
          </label>
          <input
            type='number'
            id='beds'
            name='beds'
            className='border rounded-sm w-full py-2 px-3'
            required
            defaultValue={property.beds}
          />
        </div>
        <div className='w-full sm:w-1/3 px-2'>
          <label htmlFor='baths' className='block text-gray-700 font-bold mb-2'>
            Baths
          </label>
          <input
            type='number'
            id='baths'
            name='baths'
            className='border rounded-sm w-full py-2 px-3'
            required
            defaultValue={property.baths}
          />
        </div>
        <div className='w-full sm:w-1/3 pl-2'>
          <label
            htmlFor='square_feet'
            className='block text-gray-700 font-bold mb-2'
          >
            Square Feet
          </label>
          <input
            type='number'
            id='square_feet'
            name='square_feet'
            className='border rounded-sm w-full py-2 px-3'
            required
            defaultValue={property.square_feet}
          />
        </div>
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2'>Amenities</label>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          <div>
            <input
              type='checkbox'
              id='amenity_wifi'
              name='amenities'
              value='Wifi'
              className='mr-2'
              defaultChecked={property.amenities.includes('Wifi')}
            />
            <label htmlFor='amenity_wifi'>Wifi</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_kitchen'
              name='amenities'
              value='Full kitchen'
              className='mr-2'
              defaultChecked={property.amenities.includes('Full kitchen')}
            />
            <label htmlFor='amenity_kitchen'>Full kitchen</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_washer_dryer'
              name='amenities'
              value='Washer & Dryer'
              className='mr-2'
              defaultChecked={property.amenities.includes('Washer & Dryer')}
            />
            <label htmlFor='amenity_washer_dryer'>Washer & Dryer</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_free_parking'
              name='amenities'
              value='Free Parking'
              className='mr-2'
              defaultChecked={property.amenities.includes('Free Parking')}
            />
            <label htmlFor='amenity_free_parking'>Free Parking</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_pool'
              name='amenities'
              value='Swimming Pool'
              className='mr-2'
              defaultChecked={property.amenities.includes('Swimming Pool')}
            />
            <label htmlFor='amenity_pool'>Swimming Pool</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_hot_tub'
              name='amenities'
              value='Hot Tub'
              className='mr-2'
              defaultChecked={property.amenities.includes('Hot Tub')}
            />
            <label htmlFor='amenity_hot_tub'>Hot Tub</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_24_7_security'
              name='amenities'
              value='24/7 Security'
              className='mr-2'
              defaultChecked={property.amenities.includes('24/7 Security')}
            />
            <label htmlFor='amenity_24_7_security'>24/7 Security</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_wheelchair_accessible'
              name='amenities'
              value='Wheelchair Accessible'
              className='mr-2'
              defaultChecked={property.amenities.includes(
                'Wheelchair Accessible'
              )}
            />
            <label htmlFor='amenity_wheelchair_accessible'>
              Wheelchair Accessible
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_elevator_access'
              name='amenities'
              value='Elevator Access'
              className='mr-2'
              defaultChecked={property.amenities.includes('Elevator Access')}
            />
            <label htmlFor='amenity_elevator_access'>Elevator Access</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_dishwasher'
              name='amenities'
              value='Dishwasher'
              className='mr-2'
              defaultChecked={property.amenities.includes('Dishwasher')}
            />
            <label htmlFor='amenity_dishwasher'>Dishwasher</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_gym_fitness_center'
              name='amenities'
              value='Gym/Fitness Center'
              className='mr-2'
              defaultChecked={property.amenities.includes('Gym/Fitness Center')}
            />
            <label htmlFor='amenity_gym_fitness_center'>
              Gym/Fitness Center
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_air_conditioning'
              name='amenities'
              value='Air Conditioning'
              className='mr-2'
              defaultChecked={property.amenities.includes('Air Conditioning')}
            />
            <label htmlFor='amenity_air_conditioning'>Air Conditioning</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_balcony_patio'
              name='amenities'
              value='Balcony/Patio'
              className='mr-2'
              defaultChecked={property.amenities.includes('Balcony/Patio')}
            />
            <label htmlFor='amenity_balcony_patio'>Balcony/Patio</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_smart_tv'
              name='amenities'
              value='Smart TV'
              className='mr-2'
              defaultChecked={property.amenities.includes('Smart TV')}
            />
            <label htmlFor='amenity_smart_tv'>Smart TV</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_coffee_maker'
              name='amenities'
              value='Coffee Maker'
              className='mr-2'
              defaultChecked={property.amenities.includes('Coffee Maker')}
            />
            <label htmlFor='amenity_coffee_maker'>Coffee Maker</label>
          </div>
        </div>
      </div>

      <div className='mb-4 bg-blue-50 p-4'>
        <label className='block text-gray-700 font-bold mb-2'>
          Rates (Leave blank if not applicable)
        </label>
        <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
          <div className='flex items-center'>
            <label htmlFor='weekly_rate' className='mr-2'>
              Weekly
            </label>
            <input
              type='number'
              id='weekly_rate'
              name='rates.weekly'
              className='border rounded-sm w-full py-2 px-3'
              defaultValue={property.rates.weekly}
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='monthly_rate' className='mr-2'>
              Monthly
            </label>
            <input
              type='number'
              id='monthly_rate'
              name='rates.monthly'
              className='border rounded-sm w-full py-2 px-3'
              defaultValue={property.rates.monthly}
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='nightly_rate' className='mr-2'>
              Nightly
            </label>
            <input
              type='number'
              id='nightly_rate'
              name='rates.nightly'
              className='border rounded-sm w-full py-2 px-3'
              defaultValue={property.rates.nightly}
            />
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <label
          htmlFor='seller_name'
          className='block text-gray-700 font-bold mb-2'
        >
          Seller Name
        </label>
        <input
          type='text'
          id='seller_name'
          name='seller_info.name.'
          className='border rounded-sm w-full py-2 px-3'
          placeholder='Name'
          defaultValue={property.seller_info.name}
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='seller_email'
          className='block text-gray-700 font-bold mb-2'
        >
          Seller Email
        </label>
        <input
          type='email'
          id='seller_email'
          name='seller_info.email'
          className='border rounded-sm w-full py-2 px-3'
          placeholder='Email address'
          required
          defaultValue={property.seller_info.email}
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='seller_phone'
          className='block text-gray-700 font-bold mb-2'
        >
          Seller Phone
        </label>
        <input
          type='tel'
          id='seller_phone'
          name='seller_info.phone'
          className='border rounded-sm w-full py-2 px-3'
          placeholder='Phone'
          defaultValue={property.seller_info.phone}
        />
      </div>
      <div>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-hidden focus:shadow-outline'
          type='submit'
        >
          Update Property
        </button>
      </div>
    </form>
  );
};
export default PropertyEditForm;

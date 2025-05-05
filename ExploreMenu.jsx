import'./ExploreMenu.css'
import { menu_list } from '../../assets/assets' 

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({ category,setCategory})=> {

  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Menus Speak Louder Than Words</h1>
    <p className='explore-menu-text'>Discover a diverse selection of delicious dishes at [Restaurant Name]. From fresh, seasonal appetizers to mouthwatering mains, including tender meats, Salad, Rolls ,Sandwich, Pasta, Noodles, and vegetarian options, there s something for everyone. Finish your meal with our irresistible desserts. Experience the perfect blend of flavors and quality in every bite. </p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
             return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active-menu":" "} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
                </div>

               
             )
        })}
    </div>
    <hr/>
    </div>

  )
}


export default ExploreMenu
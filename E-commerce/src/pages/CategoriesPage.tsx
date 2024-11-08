import React, {useEffect, useState} from 'react';
import { fetchCategories, Category } from '../services/categoryService';
import { List, ListItem, ListItemText} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CategoriesPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
      const getCategories = async () => {
        try {
          const data = await fetchCategories();
          setCategories(data);
        } catch (error) {
          console.error(error);
        }
      };
      getCategories();
    }, []);

    const handleCategoryClick = (categoryId: string) => {
        navigate(`/products/${categoryId}`);
    };
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>Danh mục sản phẩm</h1>
        <List>
          {categories.map((category) => (
            <ListItem key={category.id} onClick={() => handleCategoryClick(category.id)} >
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };
  
  export default CategoriesPage;
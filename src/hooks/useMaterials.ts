import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export type Material = {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  full_description: string | null;
  content: string | null;
  instructions: string | null;
  tips: string | null;
  category: string;
  category_id: string | null;
  subcategory: string | null;
  objective: string | null;
  type: string;
  plan_required: string;
  tags: string[] | null;
  featured: boolean | null;
  published_at: string | null;
  created_at: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  material_count: number;
};

export type Kit = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  plan_required: string;
};

export function useMaterials() {
  return useQuery({
    queryKey: ['materials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('materials')
        .select('*')
        .order('published_at', { ascending: false });
      if (error) throw error;
      return data as Material[];
    },
  });
}

export function useMaterial(slug: string | undefined) {
  return useQuery({
    queryKey: ['material', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('materials')
        .select('*')
        .eq('slug', slug!)
        .single();
      if (error) throw error;
      return data as Material;
    },
    enabled: !!slug,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      if (error) throw error;
      return data as Category[];
    },
  });
}

export function useKits() {
  return useQuery({
    queryKey: ['kits'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('kits')
        .select('*, kit_items(material_id)')
        .order('name');
      if (error) throw error;
      return data as (Kit & { kit_items: { material_id: string }[] })[];
    },
  });
}

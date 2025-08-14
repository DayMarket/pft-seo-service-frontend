import { useQuery } from '@tanstack/vue-query';

import { marketingApi } from '$shared/api/client';

export const useFaq = () => {
  const { faq } = marketingApi();

  const {
    data: faqData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['marketing:faq'],
    queryFn: () => faq.getInfoAbout('faq'),
  });

  return { faqData, isPending, isError, error };
};

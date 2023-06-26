import {useEffect, useState} from 'react';

import {LinkSerialized} from '@/domain/model/entity/link';
import {deleteLink as deleteLinkDDD, createLink} from '@/domain/usecase/link';

export const useLinkAll = (
  wannadoId: string,
  initialLinkList: LinkSerialized[],
) => {
  const [linkList, setLinkList] = useState<LinkSerialized[]>(initialLinkList);

  const addLink = async (title: string, url: string) => {
    const link = await createLink(wannadoId, title, url);
    if (link) {
      setLinkList(prevLinkList => [...prevLinkList, link]);
    }
  };

  const deleteLink = (linkId: string) => {
    deleteLinkDDD(wannadoId, linkId);
    setLinkList(prevLinkList =>
      prevLinkList.filter(link => link.id !== linkId),
    );
  };

  useEffect(() => {
    setLinkList(initialLinkList);
  }, [initialLinkList]);

  return {
    linkList,
    addLink,
    deleteLink,
  };
};

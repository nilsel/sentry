from django.core.urlresolvers import reverse

from sentry.models import Group
from sentry.testutils import APITestCase


class GroupDeleteTest(APITestCase):
    def test_simple(self):
        self.client.force_authenticate(user=self.user)

        group = self.create_group()

        url = reverse('sentry-api-0-group-delete', kwargs={
            'project_id': self.project.slug,
            'team_slug': self.team.slug,
            'group_id': group.id
        })
        response = self.client.post(url, format='json')

        assert response.status_code == 200, response.content

        group = Group.objects.filter(id=group.id).exists()
        assert not group

from django.core.urlresolvers import reverse

from sentry.models import GroupBookmark
from sentry.testutils import APITestCase


class GroupBookmarkTest(APITestCase):
    def test_simple(self):
        self.client.force_authenticate(user=self.user)

        group = self.create_group()

        url = reverse('sentry-api-0-group-bookmark', kwargs={
            'project_id': self.project.slug,
            'team_slug': self.team.slug,
            'group_id': group.id
        })
        response = self.client.post(url, format='json')

        assert response.status_code == 200, response.content

        # ensure we've created the bookmark
        assert GroupBookmark.objects.filter(
            group=group, user=self.user).exists()
